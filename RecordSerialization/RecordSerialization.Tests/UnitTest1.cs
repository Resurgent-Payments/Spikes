using System.Text.Json;

namespace RecordSerialization.Tests;

public class UnitTest1
{
    [Fact]
    public void Test1()
    {
        var msgId = Guid.NewGuid();
        var record = new MyTestRecord("Richard", "Bennett") { MsgId = msgId };

        var ser = JsonSerializer.Serialize(record);

        var record2 = JsonSerializer.Deserialize<MyTestRecord>(ser)!;

        Assert.Equivalent(record, record2);
        Assert.Equal(msgId, record.MsgId);
        Assert.Equal(msgId, record2.MsgId);
    }

    public record MyTestRecord(string FirstName, string LastName)
    {
        public Guid? MsgId { get; set; } = Guid.NewGuid();
    }
}