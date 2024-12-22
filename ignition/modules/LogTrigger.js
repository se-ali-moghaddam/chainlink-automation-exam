const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('LogTriggerModule', m => {
    const LogTriggerModule = m.contract('LogTrigger');

    return { LogTriggerModule };
})