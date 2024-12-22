const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('CustomLogicTriggerModule', m => {
    const CustomLogicTriggerModule = m.contract('CustomLogicTrigger', [300]);

    return { CustomLogicTriggerModule };
});