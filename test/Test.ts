import assert from "assert";
import { 
  TestHelpers,
  Staking_Deposit
} from "generated";
const { MockDb, Staking } = TestHelpers;

describe("Staking contract Deposit event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for Staking contract Deposit event
  const event = Staking.Deposit.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("Staking_Deposit is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await Staking.Deposit.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStakingDeposit = mockDbUpdated.entities.Staking_Deposit.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStakingDeposit: Staking_Deposit = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      user: event.params.user,
      pid: event.params.pid,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStakingDeposit, expectedStakingDeposit, "Actual StakingDeposit should be the same as the expectedStakingDeposit");
  });
});
