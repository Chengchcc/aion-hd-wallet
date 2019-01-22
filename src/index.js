import {AionAccount} from "./AionAccount";
import {AionTransaction} from "./AionTransaction";
import bip39 from 'bip39';

const generateMnemonic = () => {
    return bip39.generateMnemonic();
};

const validateMnemonic = (mnemonic) => {
    return bip39.validateMnemonic(mnemonic)
};

export  {
    AionTransaction,
    AionAccount,
    generateMnemonic,
    validateMnemonic,
};
