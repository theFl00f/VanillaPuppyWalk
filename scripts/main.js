    $(function() {
        //-on launch, show puppy(object) with coat, leash and booties (object attributes, Boolean) around him
        // -all of this is filtered with css with a button over top saying "start"
        // -button on click fades filter and game becomes active
        // -each object attribute item, when clicked, will show a text box saying why the puppy will love it and then update the puppy object to a new image source (one with that item on the puppy)
        // -if you drag an unneeded item(ie treats maybe? he can be chubby and it can say "Mr ____ is on a diet, maybe he can have a treat when he gets back from his walk..."), return item to origin and show text saying why puppy doesn't need it (extra)
        // -when he is ready to go outside (all attributes are true) the door will open, he will go out
        // -after about a second, the filter will reapply, this time (with fireworks(extra(not a function my brain just works in nested brackets))) and a text box saying "you won!"

        //START BUTTON

        $('.start').on('click', function() {
            $(this).css('display', 'none')
            .siblings('.filter, .blur').css('filter', 'blur(0)')
        });

        //TOGGLE CLASS

        const $corgiMain = $('img#corgi');

        $('ul button img').on('click', function() {
            if ($(this).hasClass('leash')) {
                $corgiMain.toggleClass('leash');
            } 
            else if ($(this).hasClass('hat')) {
                $corgiMain.toggleClass('hat');
            } 
            else if ($(this).hasClass('coat')) {
                $corgiMain.toggleClass('coat');
            }
        });

        //ASSIGN IMG SRC

        $('ul button img').on('click', function() {
            if ($corgiMain.hasClass('leash hat coat') || $corgiMain.hasClass('leash coat hat') || $corgiMain.hasClass('coat hat leash') || $corgiMain.hasClass ('coat leash hat') || $corgiMain.hasClass('hat leash coat') || $corgiMain.hasClass('hat coat leash')) {
                $corgiMain.attr('src', './styles/assets/doghatjacketleash.png')
            } else if ($corgiMain.hasClass('leash hat') || $corgiMain.hasClass('hat leash')) {
                $corgiMain.attr('src', './styles/assets/doghatleash.png')
            } else if ($corgiMain.hasClass('coat hat') || $corgiMain.hasClass('hat coat')) {
                $corgiMain.attr('src', './styles/assets/dogjacketandhat.png')
            } else if ($corgiMain.hasClass('coat leash') || $corgiMain.hasClass('leash coat')) {
                $corgiMain.attr('src', './styles/assets/dogjacketleash.png')
            } else if ($corgiMain.hasClass('leash')) {
                $corgiMain.attr('src', './styles/assets/dogleash.png')
            } else if ($corgiMain.hasClass('coat')) {
                $corgiMain.attr('src', './styles/assets/dogjacket.png')
            } else if ($corgiMain.hasClass('hat')) {
                $corgiMain.attr('src', './styles/assets/doghat.png')
            } else {
                $corgiMain.attr('src', './styles/assets/dogbase.png')
            }
        })

        //WINNER DIALOGUE
        //What I ran out of time trying to figure out was how to exit the loop.... I tried to clearInterval() after naming the anonymous interval function, but didn't seem to have any luck. ^_^



        $('ul button img').on('click', function() {
            if ($corgiMain.hasClass('leash hat coat') || $corgiMain.hasClass('leash coat hat') || $corgiMain.hasClass('coat hat leash') || $corgiMain.hasClass ('coat leash hat') || $corgiMain.hasClass('hat leash coat') || $corgiMain.hasClass('hat coat leash')) {
                const winnerTimer = setInterval(function () {
                    $('.winner').css('display', 'flex')
                    .siblings('.filter').css('filter', 'blur(1px)')
                    .siblings('.blur').css('filter', 'blur(3px)')
                }, 1000)

                $('.close').on('click', function() {
                    $(this).parent().css('display', 'none')
                    .siblings('.filter, .blur').css('filter', 'blur(0)'), clearInterval(winnerTimer)
                });
            }
        })


    });
