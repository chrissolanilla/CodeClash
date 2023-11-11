import m from "mithril"
function WinModal(closeGameWonModal:any) {
    function closeModal() {
        closeGameWonModal();
    }
    return {
        view: () => (
            <>
                
                <div class="modelChris  flex items-center justify-center h-screen ">
                    <div class="modelChris1">
                    <div class="modelChris2">
                        <p class="problemText">Congratulations!</p>
                        <p class ="problemText">You won the game!</p>
                        <button class="modelChris3 btn btn-primary" onclick={closeModal} >Close</button>
                    </div>
                    </div>
                </div>

            </>
        ),
    };
}

export default WinModal;
