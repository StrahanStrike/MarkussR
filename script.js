    var grade = 0;

    function Random() {
        var grade = Math.floor(Math.random() * 10);
        document.getElementById('tb').value = grade;

        if(grade == 1)
        {
            console.log("🤬");
        }
        if(grade == 2)
        {
            console.log("😥");
        }
        if(grade == 3)
        {
            console.log("😤");
        }
        if(grade == 4)
        {
            console.log("🤯");
        }
        if(grade == 5)
        {
            console.log("🤔");
        }
        if(grade == 6)
        {
            console.log("🙂");
        }
        if(grade == 7)
        {
            console.log("💩");
        }
        if(grade == 8)
        {
            console.log("😮");
        }
        if(grade == 9)
        {
            console.log("😇");
        }
        if(grade == 10)
        {
            console.log("🤩");
        }
    }