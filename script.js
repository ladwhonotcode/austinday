document.addEventListener("DOMContentLoaded", () => {

    const envelope = document.querySelector(".envelope");
    const text = document.getElementById("typing-text");
    const music = document.getElementById("bgMusic");

    // MUSIC AUTOPLAY / FALLBACK
    if (music) {
        const tryPlay = () => {
            music.play().catch(() => {});
        };

        tryPlay();
        document.addEventListener("click", tryPlay, { once:true });
    }

    const message = `
Hai Kent!

Eme, Austin dapat diba XD

Anyways, I hope that you'll enjoy your special day. Wag masyadong ma-stress diyan sa tita mo na terror. Ignore the negativity, and have fun with your trip! Pahingi po pasalubong, jokes! 

Ito na, seryoso na talaga. I want you to remember that you're amazing, you feel and empathize, a trait that makes you such a good friend. If there are days when you're down. Then please remember, everything will eventually be okay again. Kaya mo yan, ikaw pa, pagkatiwalaan mo lang sarili mo at lilipas rin yang nararamdaman mo. 

If there are days when you just want someone to listen, then I am here to listen if you ever want to, of course. Or if you just wanna be then we can just enjoy the silence. At the end of the day, I would like you to be happy and that heavy feeling to be gone. I'll always be the friend who smiles, just to make you smile too!

Don't you ever ever ever forget to love yourself, and to have patience with yourself! There will be days when you'll be frustrated of your own being, but be gentle with yourself, it's your first time living too you know? You're allowed to feel tired, but that also means you should embrace resting. Your emotions matter, you're allowed to feel them, don't let others invalidate whatever you may feel at the moment. It's okay to make mistakes, feel confused, be sad, disappointed, or feel lost it's something that we experience in life, so always have the time let yourself feel, love yourself, and be at peace with the person you are growing up to be.

Love you, baks! 💜
`;

    let index = 0;
    let started = false;
    const speed = 25;

    function openLetter() {

        envelope.classList.toggle("open");

        if (!started) {
            started = true;
            setTimeout(typeLetter, 700);
        }
    }

    function typeLetter() {

        if (index < message.length) {
            text.textContent += message[index++];
            setTimeout(typeLetter, speed);
        }
    }

    window.openLetter = openLetter;
});