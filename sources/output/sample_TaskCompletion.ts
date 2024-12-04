import { 
    Cell,
    Slice, 
    Address, 
    Builder, 
    beginCell, 
    ComputeError, 
    TupleItem, 
    TupleReader, 
    Dictionary, 
    contractAddress, 
    ContractProvider, 
    Sender, 
    Contract, 
    ContractABI, 
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    let sc_0 = slice;
    let _code = sc_0.loadRef();
    let _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function loadGetterTupleStateInit(source: TupleReader) {
    let _code = source.readCell();
    let _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

function storeTupleStateInit(source: StateInit) {
    let builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(8);
    let _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleStdAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleStdAddress(source: StdAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    let sc_0 = slice;
    let _workchain = sc_0.loadIntBig(32);
    let _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function loadGetterTupleVarAddress(source: TupleReader) {
    let _workchain = source.readBigNumber();
    let _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

function storeTupleVarAddress(source: VarAddress) {
    let builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounced: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounced);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    let sc_0 = slice;
    let _bounced = sc_0.loadBit();
    let _sender = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function loadGetterTupleContext(source: TupleReader) {
    let _bounced = source.readBoolean();
    let _sender = source.readAddress();
    let _value = source.readBigNumber();
    let _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounced: _bounced, sender: _sender, value: _value, raw: _raw };
}

function storeTupleContext(source: Context) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounced);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    bounce: boolean;
    to: Address;
    value: bigint;
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeBit(src.bounce);
        b_0.storeAddress(src.to);
        b_0.storeInt(src.value, 257);
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
    };
}

export function loadSendParameters(slice: Slice) {
    let sc_0 = slice;
    let _bounce = sc_0.loadBit();
    let _to = sc_0.loadAddress();
    let _value = sc_0.loadIntBig(257);
    let _mode = sc_0.loadIntBig(257);
    let _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    let _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function loadGetterTupleSendParameters(source: TupleReader) {
    let _bounce = source.readBoolean();
    let _to = source.readAddress();
    let _value = source.readBigNumber();
    let _mode = source.readBigNumber();
    let _body = source.readCellOpt();
    let _code = source.readCellOpt();
    let _data = source.readCellOpt();
    return { $$type: 'SendParameters' as const, bounce: _bounce, to: _to, value: _value, mode: _mode, body: _body, code: _code, data: _data };
}

function storeTupleSendParameters(source: SendParameters) {
    let builder = new TupleBuilder();
    builder.writeBoolean(source.bounce);
    builder.writeAddress(source.to);
    builder.writeNumber(source.value);
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type Task = {
    $$type: 'Task';
    receiver: Address;
    reward: bigint;
    isValidated: boolean;
}

export function storeTask(src: Task) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.storeAddress(src.receiver);
        b_0.storeInt(src.reward, 257);
        b_0.storeBit(src.isValidated);
    };
}

export function loadTask(slice: Slice) {
    let sc_0 = slice;
    let _receiver = sc_0.loadAddress();
    let _reward = sc_0.loadIntBig(257);
    let _isValidated = sc_0.loadBit();
    return { $$type: 'Task' as const, receiver: _receiver, reward: _reward, isValidated: _isValidated };
}

function loadTupleTask(source: TupleReader) {
    let _receiver = source.readAddress();
    let _reward = source.readBigNumber();
    let _isValidated = source.readBoolean();
    return { $$type: 'Task' as const, receiver: _receiver, reward: _reward, isValidated: _isValidated };
}

function loadGetterTupleTask(source: TupleReader) {
    let _receiver = source.readAddress();
    let _reward = source.readBigNumber();
    let _isValidated = source.readBoolean();
    return { $$type: 'Task' as const, receiver: _receiver, reward: _reward, isValidated: _isValidated };
}

function storeTupleTask(source: Task) {
    let builder = new TupleBuilder();
    builder.writeAddress(source.receiver);
    builder.writeNumber(source.reward);
    builder.writeBoolean(source.isValidated);
    return builder.build();
}

function dictValueParserTask(): DictionaryValue<Task> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTask(src)).endCell());
        },
        parse: (src) => {
            return loadTask(src.loadRef().beginParse());
        }
    }
}

export type TaskCompletion$Data = {
    $$type: 'TaskCompletion$Data';
    task: Task;
    deployer: Address;
}

export function storeTaskCompletion$Data(src: TaskCompletion$Data) {
    return (builder: Builder) => {
        let b_0 = builder;
        b_0.store(storeTask(src.task));
        b_0.storeAddress(src.deployer);
    };
}

export function loadTaskCompletion$Data(slice: Slice) {
    let sc_0 = slice;
    let _task = loadTask(sc_0);
    let _deployer = sc_0.loadAddress();
    return { $$type: 'TaskCompletion$Data' as const, task: _task, deployer: _deployer };
}

function loadTupleTaskCompletion$Data(source: TupleReader) {
    const _task = loadTupleTask(source);
    let _deployer = source.readAddress();
    return { $$type: 'TaskCompletion$Data' as const, task: _task, deployer: _deployer };
}

function loadGetterTupleTaskCompletion$Data(source: TupleReader) {
    const _task = loadGetterTupleTask(source);
    let _deployer = source.readAddress();
    return { $$type: 'TaskCompletion$Data' as const, task: _task, deployer: _deployer };
}

function storeTupleTaskCompletion$Data(source: TaskCompletion$Data) {
    let builder = new TupleBuilder();
    builder.writeTuple(storeTupleTask(source.task));
    builder.writeAddress(source.deployer);
    return builder.build();
}

function dictValueParserTaskCompletion$Data(): DictionaryValue<TaskCompletion$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTaskCompletion$Data(src)).endCell());
        },
        parse: (src) => {
            return loadTaskCompletion$Data(src.loadRef().beginParse());
        }
    }
}

 type TaskCompletion_init_args = {
    $$type: 'TaskCompletion_init_args';
}

function initTaskCompletion_init_args(src: TaskCompletion_init_args) {
    return (builder: Builder) => {
        let b_0 = builder;
    };
}

async function TaskCompletion_init() {
    const __code = Cell.fromBase64('te6ccgECCAEAAToAART/APSkE/S88sgLAQIBYgIDA3rQAdDTAwFxsKMB+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiFRQUwNvBPhhAvhi2zxVE9s88uCCBAUGABGhhX3aiaGkAAMBzu1E0NQB+GPSAAGOTPpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgBgQEB1wDSAFUgA/pAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IgUbBTgMPgo1wsKgwm68uCJ2zwHABoBkjB/4CDXSTHCHzBwAKzI+EMBzH8BygBVMFUwWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhKBAQHPAMoAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVAAQ+EL4QnB/VQI=');
    const __system = Cell.fromBase64('te6cckECCgEAAUQAAQHAAQEFoD1TAgEU/wD0pBP0vPLICwMCAWIECQN60AHQ0wMBcbCjAfpAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IhUUFMDbwT4YQL4Yts8VRPbPPLgggUHCAHO7UTQ1AH4Y9IAAY5M+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiAGBAQHXANIAVSAD+kABINdJgQELuvLgiCDXCwoggQT/uvLQiYMJuvLgiBRsFOAw+CjXCwqDCbry4InbPAYAEPhC+EJwf1UCABoBkjB/4CDXSTHCHzBwAKzI+EMBzH8BygBVMFUwWiDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFhKBAQHPAMoAASDXSYEBC7ry4Igg1wsKIIEE/7ry0ImDCbry4IjPFsntVAARoYV92omhpAADcO0YWA==');
    let builder = beginCell();
    builder.storeRef(__system);
    builder.storeUint(0, 1);
    initTaskCompletion_init_args({ $$type: 'TaskCompletion_init_args' })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

const TaskCompletion_errors: { [key: number]: { message: string } } = {
    2: { message: `Stack underflow` },
    3: { message: `Stack overflow` },
    4: { message: `Integer overflow` },
    5: { message: `Integer out of expected range` },
    6: { message: `Invalid opcode` },
    7: { message: `Type check error` },
    8: { message: `Cell overflow` },
    9: { message: `Cell underflow` },
    10: { message: `Dictionary error` },
    11: { message: `'Unknown' error` },
    12: { message: `Fatal error` },
    13: { message: `Out of gas error` },
    14: { message: `Virtualization error` },
    32: { message: `Action list is invalid` },
    33: { message: `Action list is too long` },
    34: { message: `Action is invalid or not supported` },
    35: { message: `Invalid source address in outbound message` },
    36: { message: `Invalid destination address in outbound message` },
    37: { message: `Not enough TON` },
    38: { message: `Not enough extra-currencies` },
    39: { message: `Outbound message does not fit into a cell after rewriting` },
    40: { message: `Cannot process a message` },
    41: { message: `Library reference is null` },
    42: { message: `Library change action error` },
    43: { message: `Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree` },
    50: { message: `Account state size exceeded limits` },
    128: { message: `Null reference exception` },
    129: { message: `Invalid serialization prefix` },
    130: { message: `Invalid incoming message` },
    131: { message: `Constraints error` },
    132: { message: `Access denied` },
    133: { message: `Contract stopped` },
    134: { message: `Invalid argument` },
    135: { message: `Code of a contract was not found` },
    136: { message: `Invalid address` },
    137: { message: `Masterchain support is not enabled for this contract` },
    20156: { message: `Insufficient balance to transfer reward` },
    35068: { message: `Task not validated` },
    62348: { message: `Only the deployer can transfer rewards` },
}

const TaskCompletion_types: ABIType[] = [
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounced","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"Task","header":null,"fields":[{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}},{"name":"reward","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"isValidated","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"TaskCompletion$Data","header":null,"fields":[{"name":"task","type":{"kind":"simple","type":"Task","optional":false}},{"name":"deployer","type":{"kind":"simple","type":"address","optional":false}}]},
]

const TaskCompletion_getters: ABIGetter[] = [
]

export const TaskCompletion_getterMapping: { [key: string]: string } = {
}

const TaskCompletion_receivers: ABIReceiver[] = [
]

export class TaskCompletion implements Contract {
    
    static async init() {
        return await TaskCompletion_init();
    }
    
    static async fromInit() {
        const init = await TaskCompletion_init();
        const address = contractAddress(0, init);
        return new TaskCompletion(address, init);
    }
    
    static fromAddress(address: Address) {
        return new TaskCompletion(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  TaskCompletion_types,
        getters: TaskCompletion_getters,
        receivers: TaskCompletion_receivers,
        errors: TaskCompletion_errors,
    };
    
    private constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
}