var quiztitle = "QCM avec jQuery";
var quiz = [{
    "question": "Q1: La première question du QCM",
    "choices": [
        "Choix 1",
        "Choix 2",
        "Choix 3"
    ],
    "correct": "Choix 2",
    "explanation": "Le choix 2 est la bonne réponse parce que ...",
},
{
    "question": "Q2: La deuxieme question du QCM",
    "choices": [
        "Choix 1",
        "Choix 2",
        "Choix 3"
    ],
    "correct": "Choix 3",
    "explanation": "Le choix 3 est la bonne réponse parce que ...",
},
{
    "question": "Q3: La troisième question du QCM",
    "choices": [
        "Choix 1",
        "Choix 2",
        "Choix 3"
    ],
    "correct": "Choix 1",
    "explanation": "Le choix 1 est la bonne réponse parce que ...",
},
{
    "question": "Q4: La quatrième question du QCM",
    "choices": [
        "Choix 1",
        "Choix 2",
        "Choix 3"
    ],
    "correct": "Choix 3",
    "explanation": "Le choix 3 est la bonne réponse parce que ...",
},
{
    "question": "Q5: La cinquième question du QCM",
    "choices": [
        "Choix 1",
        "Choix 2",
        "Choix 3"
    ],
    "correct": "Choix 2",
    "explanation": "Le choix 2 est la bonne réponse parce que ...",
},

];

var currentquestion = 0,
    score = 0,
    submt = true,
    picked;

jQuery(document).ready(function ($) {
    function htmlEncode(value) {
        return $(document.createElement('div')).text(value).html();
    }

    function addChoices(choices) {
        if (typeof choices !== "undefined" && $.type(choices) == "array") {
            $('#choice-block').empty();
            for (var i = 0; i < choices.length; i++) {
                $(document.createElement('li')).addClass('choice choice-box').attr('data-index', i).text(choices[i]).appendTo('#choice-block');
            }
        }
    }

    function nextQuestion() {
        submt = true;
        $('#explanation').empty();
        $('#question').text(quiz[currentquestion]['question']);
        $('#pager').text('Question ' + Number(currentquestion + 1) + ' sur ' + quiz.length);
        addChoices(quiz[currentquestion]['choices']);
        setupButtons();
    }

    function processQuestion(choice) {
        var correct_indx = quiz[currentquestion]['choices'].indexOf(quiz[currentquestion]['correct']);
        if (quiz[currentquestion]['choices'][choice] == quiz[currentquestion]['correct']) {
            $('.choice').eq(choice).css({
                'background-color': '#50D943'
            });
            $('#explanation').html('<strong>Correct!</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
            score++;
        } else if (choice == null) {
            $('.choice').css({
                'background-color': 'orange'
            });
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        } else {
            $('.choice').eq(choice).css({
                'background-color': '#D92623'
            });
            $('.choice').eq(correct_indx).css({
                'background-color': '#50D943'
            });
            $('#explanation').html('<strong>Incorrect.</strong> ' + htmlEncode(quiz[currentquestion]['explanation']));
        }
        currentquestion++;
        $('#submitbutton').html('Suivant »').on('click', function () {

            if (currentquestion == quiz.length) {
                endQuiz();
            } else {
                $(this).text('Corriger').css({
                    'color': '#222'
                }).off('click');
                nextQuestion();
            }
        })
    }

    function setupButtons() {
        picked = null;
        $('.choice').on('mouseover', function () {
            $(this).css({
                'background-color': '#e1e1e1'
            });
        });
        $('.choice').on('mouseout', function () {
            $(this).css({
                'background-color': '#fff'
            });
        })
        $('.choice').on('click', function () {
            picked = $(this).attr('data-index');
            $('.choice').removeAttr('style').off('mouseout mouseover');
            $(this).css({
                'border-color': '#222',
                'font-weight': 700,
                'background-color': '#c1c1c1'
            });

        })
        if (submt) {
            submt = false;
            $('#submitbutton').css({
                'color': '#000'
            }).on('click', function () {
                $('.choice').off('click');
                $(this).off('click');
                processQuestion(picked);
            });
        }
    }

    function endQuiz() {
        $('#explanation').empty();
        $('#question').empty();
        $('#choice-block').empty();
        $('#submitbutton').remove();
        $('#question').text("Vous avez  " + score + " sur " + quiz.length + " corrects.");
        $(document.createElement('h2')).css({
            'text-align': 'center',
            'font-size': '4em'
        }).text(Math.round(score / quiz.length * 100) + '%').insertAfter('#question');
    }

    function init() {
        if (typeof quiztitle !== "undefined" && $.type(quiztitle) === "string") {
            $(document.createElement('h1')).text(quiztitle).appendTo('#frame');
        } else {
            $(document.createElement('h1')).text("Quiz").appendTo('#frame');
        }
        if (typeof quiz !== "undefined" && $.type(quiz) === "array") {
            $(document.createElement('p')).addClass('pager').attr('id', 'pager').text('Question 1 of ' + quiz.length).appendTo('#frame');
            $(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#frame');

            $(document.createElement('p')).addClass('explanation').attr('id', 'explanation').html(' ').appendTo('#frame');
            $(document.createElement('ul')).attr('id', 'choice-block').appendTo('#frame');
            addChoices(quiz[0]['choices']);
            $(document.createElement('div')).addClass('choice-box').attr('id', 'submitbutton').text('Corriger').css({
                'font-weight': 700,
                'color': '#222',
                'padding': '30px 0'
            }).appendTo('#frame');

            setupButtons();
        }
    }

    init();
});