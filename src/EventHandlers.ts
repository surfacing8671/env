/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Staking,
  Staking_Deposit,
  Staking_EmergencyWithdraw,
  Staking_RewardPaid,
  Staking_Withdraw,
} from "generated";

Staking.Deposit.handler(async ({ event, context }) => {
  const entity: Staking_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.Staking_Deposit.set(entity);
});


Staking.EmergencyWithdraw.handler(async ({ event, context }) => {
  const entity: Staking_EmergencyWithdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.Staking_EmergencyWithdraw.set(entity);
});


Staking.RewardPaid.handler(async ({ event, context }) => {
  const entity: Staking_RewardPaid = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.Staking_RewardPaid.set(entity);
});


Staking.Withdraw.handler(async ({ event, context }) => {
  const entity: Staking_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    pid: event.params.pid,
    amount: event.params.amount,
  };

  context.Staking_Withdraw.set(entity);
});

