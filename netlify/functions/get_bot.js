exports.handler = async () => {
    const rawList = `

@detipiudfnr_bot
@Kendhdujebot
@nifiss123321bot
@FyrdtesfrwBot
@Jeejkxidjz62_bot
@Yuuugg_bot
@Sgxjbdhs_bot
@nifisee_bot
@Xyfychfjfbot
@JshdhjdjdjdkdkdlBOT
@Axmedikt_bot
@Duhdjdj_jsj_bot
@Hshsjd_wiwi_bot
@Politelen_bot

    `;
    /* ==================================================================== */

    // Сервер сам очистит список от пустых строк и пробелов
    const bots = rawList.split('\n')
                        .map(b => b.trim())
                        .filter(b => b.startsWith('@'));
    
    // Заглушка, если ты случайно удалишь всех ботов
    if (bots.length === 0) {
         return { 
             statusCode: 200, 
             body: JSON.stringify({ url: 'https://t.me/telegram' }) 
         };
    }

    // Рандомный выбор одного бота из твоего списка
    const randomBot = bots[Math.floor(Math.random() * bots.length)];
    
    // Превращаем @юзернейм в нормальную ссылку
    const url = randomBot.replace('@', 'https://t.me/');
    
    // Возвращаем пользователю только одну ссылку (весь список остается тайной)
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ url: url })
    };
};
