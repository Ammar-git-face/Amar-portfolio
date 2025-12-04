$(document).ready(function(){
    // Scroll events
    $(window).scroll(function(){
        if(this.scrollY > 20) $('.navbar').addClass("sticky");
        else $('.navbar').removeClass("sticky");
        if(this.scrollY > 500) $('.scroll-up-btn').addClass("show");
        else $('.scroll-up-btn').removeClass("show");
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typed animation
    new Typed(".typing", {strings: ["YouTuber","Developer","Blogger","Designer","Freelancer"],typeSpeed:100,backSpeed:60,loop:true});
    new Typed(".typing-2", {strings: ["YouTuber","Developer","Blogger","Designer","Freelancer"],typeSpeed:100,backSpeed:60,loop:true});

    // Owl Carousel
    $('.carousel').owlCarousel({
        margin:20, loop:true, autoplay:true, autoplayTimeOut:2000, autoplayHoverPause:true,
        responsive:{0:{items:1,nav:false},600:{items:2,nav:false},1000:{items:3,nav:false}}
    });

    // Contact form submit using Resend
    const resend = new Resend('re_FqPSEkbP_LUqhqi41cRwG8ePVMgREBB2A'); // your API key
    $('#contactForm').submit(async function(e){
        e.preventDefault();
        const name = $('input[name="name"]').val();
        const email = $('input[name="email"]').val();
        const subject = $('input[name="subject"]').val();
        const message = $('textarea[name="message"]').val();
        $('#formMsg').text('Sending...');
        try{
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'amarhussaini72@gmail.com',
                subject: subject,
                html: `<p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Message:</strong> ${message}</p>`
            });
            $('#formMsg').css('color','green').text('Message sent successfully!');
            this.reset();
        }catch(err){
            $('#formMsg').css('color','red').text('Failed to send message. Try again.');
            console.error(err);
        }
    });
});

// Read more toggle
function toggleText(showFull){
    if(showFull){
        $('#shortText').hide();
        $('#fullText').show();
    }else{
        $('#fullText').hide();
        $('#shortText').show();
    }
}
