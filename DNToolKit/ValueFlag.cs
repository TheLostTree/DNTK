namespace DNToolKit;

public class ValueFlag<T>
{
    private TaskCompletionSource tcs = new TaskCompletionSource();
    public T Value;
    private bool set = false;

    public ValueFlag(){}

    public void SetValue(T? newVal)
    {
        if (newVal is not null)
        {
            Value = newVal;
            set = true;
            tcs.SetResult();
        }

    }

    public bool HasBeenSet()
    {
        return set;
    }

    public Task TaskFlag()
    {
        return tcs.Task;
    }
}