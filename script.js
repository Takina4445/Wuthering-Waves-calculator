function calculateDamage() {
    //基數區
    let attack_basicValue=Number(document.getElementById("attack_basicValue").value);
    let attack_percentageBoost=Number(document.getElementById("attack_percentageBoost").value);
    let attack_otherBoost=Number(document.getElementById("attack_otherBoost").value);
    //技能倍率乘區
    let skill_multiplier=Number(document.getElementById("skill_multiplier").value);
    //傷害加乘乘區
    let attribute_damage_multiplier=Number(document.getElementById("attribute_damage_multiplier").value);
    let specificSkill_damage_multiplier=Number(document.getElementById("specificSkill_damage_multiplier").value);
    //傷害加深區
    let damage_amplify=Number(document.getElementById("damage_amplify").value);
    //爆擊乘區
    let critical_rate=Number(document.getElementById("critical_rate").value);
    let unCritical_rate=(100-critical_rate).toFixed(2)
    let critical_damage=Number(document.getElementById("critical_damage").value);
    //防禦 待補充
    let player_level=Number(document.getElementById("player_level").value);
    let monster_level=Number(document.getElementById("monster_level").value);
    //抗性 待補充
    let base_attribute_resistance=Number(document.getElementById("base_attribute_resistance").value);
    let additional_attribute_resistance=Number(document.getElementById("additional_attribute_resistance").value);


    
    let total_attack=attack_basicValue*(1+attack_percentageBoost/100)+attack_otherBoost
    let total_skill_multiplier=skill_multiplier/100    
    //略過倍率提升
    let total_damage_multiplier=1+(attribute_damage_multiplier/100)+(specificSkill_damage_multiplier/100)
    let total_damage_amplify=1+(damage_amplify/100)
    let total_critical_damage=critical_damage
    let total_level_multiplier = ((100 + player_level) / (199 + player_level + monster_level));
    let total_resistance_multiplier=(1-((base_attribute_resistance+additional_attribute_resistance)/100))
    
    let total_normal_damage=total_attack*total_skill_multiplier*total_damage_multiplier*total_damage_amplify*1*total_level_multiplier*total_resistance_multiplier
    total_normal_damage=total_normal_damage.toFixed(2)
    let total_crit_damage=total_normal_damage*(total_critical_damage/100)
    total_crit_damage=total_crit_damage.toFixed(2)
    let expectation_damage=((total_normal_damage*unCritical_rate/100)+(total_crit_damage*critical_rate/100)).toFixed(2)
    document.getElementById('result').innerText = '未爆擊傷害('+unCritical_rate+'%):'+total_normal_damage+'\n爆擊傷害('+critical_rate+'%):'+total_crit_damage+'\n傷害期望:'+expectation_damage;
}
