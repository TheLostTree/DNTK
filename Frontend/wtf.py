from keystone import *

# The key we want to encode.
key = "<RSAKeyValue><Modulus>yYlF2xKeHRDZUSsXlLoSk/YAb2oIOwpbUeO4I+5GfWoybSpde4UnOlZgpKIDgltF3e9ST8bqIwuBxMoJTpOAnEKLNuBDdSeefHwhFqdczgeETxySwFKScmti1QRwgacrlgWglmaYCaeQrqbBceF9JbF4npi6S3+eFpw0j4rPjlE3vjh1AopaZQWAHGZI8Ixr7LDebe/uF8i7OCWXpkPKUTJnCEpyqM5H+pLN3MWRiL7mBR4XFqwKQr8J27Y3LN1iX9927hMsvAnh9PWoHzqpDTqIBF7w1ifYs3XQ3EMbf0zqc26UZXUaI5pD6qXNm3STz94SrfYqYY1R3Npz/Syaww==</Modulus><Exponent>AQAB</Exponent></RSAKeyValue>"

def main():
    # Build asm code.
    key_splits = [key[i:i+8] for i in range(0, len(key), 8)]
    code = ""
    for i, split in enumerate(key_splits):
        key_part = "".join([f"{p:02X}" for p in reversed(list(split.encode("utf-8")))])
        code += f"mov rdx, {key_part}h\n"
        code += f"mov [rax+{i*8}], rdx\n"

    # Assemble.
    engine = Ks(KS_ARCH_X86, KS_MODE_64)
    res, _ = engine.asm(code)
    print(res)

    # Turn result into hex.
    res = "".join([f"{x:02X}" for x in res])

    print(res)

if __name__ == "__main__":
    main()
