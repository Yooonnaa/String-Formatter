function cleanText(text) {
    return text.trim()
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function formatDisplayName(firstName, lastName) {
    let trimmingFirstName = cleanText(firstName)
    let trimmedLastName = cleanText(lastName)

    let capitalizingFistName = capitalize(trimmingFirstName)
    let capitalizeLastName = capitalize(trimmedLastName)

    return capitalizingFistName + " " + capitalizeLastName
}


console.log(formatDisplayName('  ava', 'STONE  '));
console.log(formatDisplayName('nOAh', '  kim'));
console.log(formatDisplayName('  mINA  ', 'pATEL'));