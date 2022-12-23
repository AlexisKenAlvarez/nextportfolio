const jap = ['み', 'ひ', 'そ', 'さ', 'む', 'つ', 'さ', 'そ', 'ひ', 'こ', 'み', 'も', 'ね', 'る', 'め', 'け', 'れ', 'せ', 'ら', 'に', 'な', 'ん', 'か', 'か', 'い', 'て', 'た',]

export function genRandom() {
    let randomLetter = jap[Math.floor(Math.random() * jap.length)];
    return randomLetter
}
