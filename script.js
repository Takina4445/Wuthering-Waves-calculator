function calculateDamage() {
    let totalDamage = 0;
    for (let i = 1; i <= 7; i++) {
        const attack = document.getElementById('attack' + i).value;
        const defense = document.getElementById('defense' + i).value;
        if (attack && defense) {
            const damage = attack - defense;
            totalDamage += (damage > 0 ? damage : 0);
        }
    }
    document.getElementById('result').innerText = 'Damage: ' + totalDamage;
}
