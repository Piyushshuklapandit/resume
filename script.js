document.getElementById('generateResume').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phone-number').value; 
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const hobbies = document.getElementById('hobbies').value;
    const training = document.getElementById('training').value;
    const experience = document.getElementById('experience').value;

    const output = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p> <!-- Added phone number -->
        <p><strong>Education:</strong> ${education}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Hobbies:</strong> ${hobbies}</p>
        <p><strong>Training/Certificates:</strong> ${training}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;
    document.getElementById('output').innerHTML = output;

    const pdfButton = document.createElement('button');
    pdfButton.textContent = "Download PDF";

    pdfButton.onclick = () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        doc.setFontSize(16);
        doc.text(`Name: ${name}`, 10, 20);
        doc.text(`Email: ${email}`, 10, 30);
        doc.text(`Phone Number: ${phoneNumber}`, 10, 40);
        doc.text(`Education: ${education}`, 10, 40);
        doc.text(`Skills: ${skills}`, 10, 60);
        doc.text(`Hobbies: ${hobbies}`, 10, 60);
        doc.text(`Training: ${training}`, 10, 70);
        doc.text(`Experience: ${experience}`, 10, 60);
        
        doc.save("resume.pdf");
    };

    document.getElementById('output').appendChild(pdfButton);
    document.getElementById('resumePreview').style.display = 'block';
});
