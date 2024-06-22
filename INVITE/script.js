document.getElementById('botForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const members = document.getElementById('members').value;
    const active = document.getElementById('active').value;
    const runtime = document.getElementById('runtime').value;
    const spam = document.getElementById('spam').value;
    const activity = document.getElementById('activity').value;
    const admin = document.getElementById('admin').value;
    const language = document.getElementById('language').value;
    const features = Array.from(document.getElementById('features').selectedOptions).map(option => option.value).join(', ');
    const groupType = document.getElementById('groupType').value;
    const communication = document.getElementById('communication').value;
    const admins = document.getElementById('admins').value;
    const groupLink = document.getElementById('groupLink').value;

    if (members === 'yes' && active === 'yes' && runtime === 'agree' && spam === 'agree' && activity === 'agree' && admin === 'yes' && groupLink) {
        const message = `
More than 15 members: ${members}\n
Is the Group Active: ${active}\n
Bot Runtime 1:30pm : 10pm?: ${runtime}\n
Spam agreement: ${spam}\n
Activity agreement: ${activity}\n
Bot Admin status: ${admin}\n
Primary Language: ${language}\n
Bot Features: ${features}\n
Group Type: ${groupType}\n
Communication Frequency: ${communication}\n
Number of Other Admins: ${admins}\n
Group Link: ${groupLink}\n`;
        const encodedMessage = encodeURIComponent(message);
        const resultLink = `https://wa.me/27717311486?text=${encodedMessage}`;
        document.getElementById('result').innerHTML = `
            <p><strong>Your WhatsApp link:</strong> <a href="${resultLink}" target="_blank">${resultLink}</a></p>
        `;
    } else {
        document.getElementById('result').textContent = 'Please make sure all conditions are met and the group link is provided.';
    }
});
