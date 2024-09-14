export function GetRandomMessage(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmno😳pqrs✋tuvwx😁✋🖐️yz0123🖐️🖐️🖐️456789❤️❤️❤️❤️❤️❤️😏😏😏😏😏';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

