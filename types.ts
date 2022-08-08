export type ISlot = {
    StartTime: string;
    EndTime: string;
};

export type ICutSlot = ISlot & {
    hasBeenUsedToCut?: boolean;
}

export type IData = {
    Date: string;
    AvailableSlots: ISlot[];
    Breaks: ICutSlot[];
    BusySlots: ICutSlot[];
}