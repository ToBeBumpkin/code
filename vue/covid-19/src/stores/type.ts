export interface ShowAddSwitch {
    suspect: boolean;
    dead: boolean;
    nowSevere: boolean;
    importedCase: boolean;
    all: boolean;
    confirm: boolean;
    noInfect: boolean;
    localConfirm: boolean;
    localinfeciton: boolean;
    heal: boolean;
    nowConfirm: boolean;
}

export interface Today {
    confirm: number;
    isUpdated: boolean;
}

export interface Total {
    showRate: boolean;
    wzz: number;
    provinceLocalConfirm: number;
    continueDayZeroLocalConfirmAdd: number;
    adcode: string;
    nowConfirm: number;
    dead: number;
    mediumRiskAreaNum: number;
    highRiskAreaNum: number;
    showHeal: boolean;
    continueDayZeroLocalConfirm: number;
    confirm: number;
    heal: number;
    mtime: string;
}

export interface Today {
    isUpdated: boolean;
    tip: string;
    wzz_add: string;
    local_confirm_add: number;
    abroad_confirm_add: number;
    dead_add: number;
    confirm: number;
    confirmCuts: number;
}

export interface Total {
    heal: number;
    showHeal: boolean;
    mediumRiskAreaNum: number;
    continueDayZeroConfirmAdd: number;
    confirm: number;
    dead: number;
    wzz: number;
    continueDayZeroLocalConfirmAdd: number;
    nowConfirm: number;
    continueDayZeroConfirm: number;
    showRate: boolean;
    provinceLocalConfirm: number;
    highRiskAreaNum: number;
    mtime: string;
    adcode: string;
}

export interface Today {
    confirm: number;
    confirmCuts: number;
    isUpdated: boolean;
    wzz_add: string;
    local_confirm_add: number;
}

export interface Total {
    nowConfirm: number;
    dead: number;
    highRiskAreaNum: number;
    adcode: string;
    showRate: boolean;
    showHeal: boolean;
    mtime: string;
    wzz: number;
    provinceLocalConfirm: number;
    mediumRiskAreaNum: number;
    confirm: number;
    heal: number;
    continueDayZeroLocalConfirmAdd: number;
    continueDayZeroLocalConfirm: number;
}

export interface Children {
    name: string;
    adcode: string;
    date: string;
    today: Today;
    total: Total;
}

export interface Children {
    name: string;
    adcode: string;
    date: string;
    today: Today;
    total: Total;
    children: Children[];
}

export interface AreaTree {
    name: string;
    today: Today;
    total: Total;
    children: Children[];
}

export interface ChinaTotal {
    dead: number;
    showLocalConfirm: number;
    highRiskAreaNum: number;
    localConfirm: number;
    suspect: number;
    nowSevere: number;
    noInfectH5: number;
    localWzzAdd: number;
    mediumRiskAreaNum: number;
    confirm: number;
    importedCase: number;
    noInfect: number;
    showlocalinfeciton: number;
    local_acc_confirm: number;
    mtime: string;
    localConfirmAdd: number;
    nowConfirm: number;
    heal: number;
    localConfirmH5: number;
    confirmAdd: number;
    nowLocalWzz: number;
    deadAdd: number;
    mRiskTime: string;
}

export interface ChinaAdd {
    suspect: number;
    importedCase: number;
    localConfirm: number;
    localConfirmH5: number;
    heal: number;
    dead: number;
    nowConfirm: number;
    noInfectH5: number;
    confirm: number;
    nowSevere: number;
    noInfect: number;
}

export interface Diseaseh5Shelf {
    showAddSwitch: ShowAddSwitch;
    areaTree: AreaTree[];
    lastUpdateTime: string;
    chinaTotal: ChinaTotal;
    chinaAdd: ChinaAdd;
    isShowAdd: boolean;
}

export interface StatisGradeCityDetail {
    nowConfirm: number;
    grade: string;
    date: string;
    syear: number;
    dead: number;
    heal: number;
    mtime: string;
    sdate: string;
    province: string;
    city: string;
    confirmAdd: number;
    confirm: number;
    wzz_add: string;
}

export interface RootObject {
    diseaseh5Shelf: Diseaseh5Shelf;
    statisGradeCityDetail: StatisGradeCityDetail[];
}