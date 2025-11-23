export  default interface MelodyControl{
    isActivePlayer: React.RefObject<boolean>,
    isPausedPlayer: React.RefObject<boolean>,
    setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>>,
    loopPlay: React.RefObject<boolean>,
}
