export default interface MelodyControl{
    isActivePlayer: React.RefObject<boolean>,
    isPausedPlayer: React.RefObject<boolean>,
    currentPlayColumn: number,
    setCurrentPlayColumn: React.Dispatch<React.SetStateAction<number>>,
    loopPlay: React.RefObject<boolean>,
}
