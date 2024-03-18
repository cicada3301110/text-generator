const input = document.querySelector(".input");
const generateBtn = document.querySelector("#button");
const textBox = document.querySelector("#text-box");

const text = ["لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."];

const textGenerate = () => {
    if (input.value <= 0 || input.value === "") {
        Swal.fire({
            icon: "error",
            title: "اوه ...",
            text: "لطفا یک مقدار صحیح رو وارد کنید !"
        });
        input.value = "";
    }
    else {
        textBox.innerHTML = "";
        for (i = 0; i < input.value; i++) {
            textBox.style.display = "flex";
            let newElement = document.createElement("p");
            newElement.innerHTML = text[0];
            textBox.append(newElement);
        }
        input.value = "";
    }
}

generateBtn.addEventListener("click", textGenerate);