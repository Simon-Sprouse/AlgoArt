

function Display({ generateArt }) { 

    let outcome = ""

    if (generateArt == true) { 
        outcome = "poop";
    }

    return (
        <div>
            <p>This is the display</p>
            <p>{outcome}</p>
        </div>
    )
}

export default Display