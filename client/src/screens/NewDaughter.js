import React from "react"

function NewDaughter(){

    return(
        <div>
            <h1>This is the page to create a new daughter blog entry.</h1>
            <div>
                <form>
                    <div>
                        <label>Title</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Reference</label>
                        <input></input>
                    </div>
                    <div>
                        <label>Text</label>
                        <textarea></textarea>
                    </div>
                    <button>POST</button>
                </form>
            </div>
        </div>
    )
}

export default NewDaughter