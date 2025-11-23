export  default interface MelodyControl{
    setIsActivePlayer: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>>,
    loopPlay: React.RefObject<boolean>,
}
