import {Cache} from "../src/cache";

//№1 Реализуйте класс для работы с кэшем, поддерживающим конечное число обращений.
let k = new Cache()


// №2 Кэш хранит пары ключ-значение.
k.set("key","value")
test('№2', () => {
    expect(k.getValue("key")).toBe("value");
});

// №3 Для каждого ключа известно число обращений, после которого кэш должен очиститься.
k.set("key1","value1",2)
test('№3', () => {
//После теста №2 число обращений уменьшилось до 1
    expect(k.getLifeCount("key1")).toBe(2);
});

// №4 После каждого обращения нужно уменьшить число обращений на 1.
k.set("key12","value12",2)
k.getValue("key12")
let getLifeCount1 = k.getLifeCount("key12")
test('№4', () => {
//число обращений уменьшилось до 1
    expect(getLifeCount1).toBe(1);
});

// №5 Если значения по ключу нет или если число обращений равно 0, то кэш веозвращает null
// уменьшаем число обращений до 0
k.set("key5","value5",1)
k.getValue("key5")
let getCount0 = k.getValue("key5")
let getCountNull = k.getValue("key5asdasddsadas")
test('№5', () => {
    expect(getCount0).toBe(null);
    expect(getCountNull).toBe(null);
});

// №6 Если пара ключ-значение задана без указания числа обращений, то число обращений равно 1.
k.set("key2","value2")
let count1 = k.getLifeCount("key2")
let countUndefined = k.getLifeCount("keynulll")
test('№6', () => {
    expect(count1).toBe(1);
    expect(countUndefined).toBe(undefined);
});

// №7 Нужна возможность получить статистику работы кэша в виде списка обращений: Ключ, Значение, Сколько осталось обращений.
let stats = k.getStats("key2")
let statsUndefined = k.getStats("undefined")
test('№7', () => {
    expect(stats).toBe("Ключ: key2 значение: value2 число обращений: 1");
    expect(statsUndefined).toBe(undefined);
});

// №8 Разработку вести через TDD.
// чтд
