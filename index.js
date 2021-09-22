const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const hex = document.querySelector("#hex");

btn.addEventListener("click", () => {
    const rgb = input.value.split(',');
    let hexCode = "#";

    if(rgb.length == 3 && /^[0-9,.]*$/.test(rgb))
    {
        rgb.forEach(el => {
            let x = Math.floor(el / 16);

            hexCode += Convert(x);

            x = (el / 16 - x) * 16;

            hexCode += Convert(x);
        });
        hex.innerText = "HEX: " + hexCode;
    }
    else
        hex.innerText = "Invalid RGB code";
});

function Convert(x)
{
    switch(x)
    {
        case 10:
            return "A";
        case 11:
            return "B";
        case 12:
            return "C";
        case 13:
            return "D";
        case 14:
            return "E";
        case 15:
            return "F";
        case 16:
            return "G";
        default:
            return x;
    }
}