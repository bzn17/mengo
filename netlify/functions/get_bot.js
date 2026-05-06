exports.handler = async () => {
    /* ====================================================================
       ЗДЕСЬ ТВОЙ СПИСОК БОТОВ
       Просто вставляй их столбиком, каждый с новой строки.
       Никаких запятых и кавычек. Формат строго: @username
    ==================================================================== */
    const rawList = `

@dsuifiibot
@nvldsfbot
@nifiss_test_bot

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
