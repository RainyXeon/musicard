(async () => {
    const { musicCard } = require("../build/structures/musicCard");
    const fs = require("fs");

    const card = new musicCard()
        .setName("Bad Habits")
        .setAuthor("By Ed Sheeran")
        // .setRequester("rainyxeon")
        .setColor("blue")
        .setTheme("classic")
        .setBrightness(50)
        .setThumbnail("https://static.qobuz.com/images/covers/ga/ua/rmk2cpqliuaga_600.jpg")
        .setProgress(10)
        .setStartTime("0:00")
        .setEndTime("3:00")

    const cardBuffer = await card.build();

    fs.writeFileSync(`musicCard.png`, cardBuffer);
    console.log("Done!");
})()