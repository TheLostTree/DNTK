# DNTK (DNToolKit)
This is the C# backend for DNTK (i also dont really know what the name is an acronym of tbh)


# RSAKey
You need to bring your own RSA Key(extracted from the client) if the one in this repo does not work.
If so, you can place the rsa key in the config.json in the same directory

MAKE SURE YOU LAUNCH DNTK BEFORE YOU LOGIN (CLICK THE DOOR)

if the default network interface is not the right one, you can toggle the choose option in config.json



config,json is regenerated on first launch



This works as a backend for iridium


Currently it is updated for version 3.6 of SomeAnimeGame


TODO:
 move away from requiring serilog as a dependency for logging inside the actual logic, but add 
a logger to the dntk class that can be configured to use serilog 


also make sure i rethink some log messages (some stuff really doesnt need to be inf)

(if i get dmca'd yall will have to drg your own protos into the solution smh)
