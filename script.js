function calculateDamage() {
    //基數區
    let attack_basicValue=document.getElementById("attack_basicValue").value;
    let attack_percentageBoost=document.getElementById("attack_percentageBoost").value;
    let attack_otherBoost=document.getElementById("attack_otherBoost").value;
    //技能倍率乘區
    let skill_multiplier=document.getElementById("skill_multiplier").value;
    //傷害加乘乘區
    let attribute_damage_multiplier=document.getElementById("attribute_damage_multiplier").value;
    let specificSkill_damage_multiplier=document.getElementById("specificSkill_damage_multiplier").value;
    //傷害加深區
    let damage_amplify=document.getElementById("damage_amplify").value;
    //爆擊乘區
    let critical_rate=document.getElementById("critical_rate").value;
    let unCritical_rate=(100-critical_rate).toFixed(2)
    let critical_damage=document.getElementById("critical_damage").value;
    //防禦 待補充
    //抗性 待補充

    
    let total_attack=attack_basicValue*(1+attack_percentageBoost/100)+attack_otherBoost
    console.log(total_attack)
    let total_skill_multiplier=skill_multiplier/100
    
    //略過倍率提升
    let total_damage_multiplier=1+(attribute_damage_multiplier/100)+(specificSkill_damage_multiplier/100)
    let total_damage_amplify=1+(damage_amplify/100)
    let total_critical_damage=critical_damage


    let total_normal_damage=total_attack*total_skill_multiplier*total_damage_multiplier*total_damage_amplify*1
    total_normal_damage=total_normal_damage.toFixed(2)
    let total_crit_damage=total_normal_damage*(total_critical_damage/100)
    total_crit_damage=total_crit_damage.toFixed(2)

    document.getElementById('result').innerText = '未爆擊傷害('+unCritical_rate+'%):'+total_normal_damage+'\n爆擊傷害('+critical_rate+'%):'+total_crit_damage;
}
