﻿// ReSharper disable MemberCanBePrivate.Global
// ReSharper disable ClassNeverInstantiated.Global
// ReSharper disable NotAccessedField.Global
using ReactiveDomain.Messaging;

namespace ReactiveDomain.Testing
{
    public class TestAggregateMessages
    {
        public class NewAggregate : Event
        {
            public readonly Guid AggregateId;
            public NewAggregate(Guid aggregateId)
            {
                AggregateId = aggregateId;
            }
        }
        public class NewAggregate2 : Event
        {
            public readonly Guid AggregateId;
            public NewAggregate2(Guid aggregateId)
            {
                AggregateId = aggregateId;
            }
        }
        public class Increment : Event
        {  
            public readonly Guid AggregateId;
            public readonly uint Amount;
            public Increment(Guid aggregateId, uint amount)
            {
                AggregateId = aggregateId;
                Amount = amount;
            }
        }

    }
}
