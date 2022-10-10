⚠️ NOT MAINTAINED ⚠️

jQuery-quiz
===========

jQuery quiz is a plugin that permits to create simple quiz pages with HTML

##HOW TO
First of all you need to have a **<form>** container

    ...
    <form id="form1">
    
    </form>
    ...

then you can start to add your elements (questions/answers):

    ...
    <form id="form1">
        The sky is <input type="text" answ="blue"/>.
        The pen is <input type="text" answ="on" help="true"/> the table.<br />
    </form>
    ...

as you can see your question have an **<input type="text">** with an **answ** attribute that contains the correct answer.

The final step is to add the verify button:

    ...
    <form id="form1">
        The sky is <input type="text" answ="blue"/>.
        The pen is <input type="text" answ="on" help="true"/> the table.<br />
        <input type="button" class="subm" value="Verify"/>
    </form>
    ...

The verify button need to have **class="subm"**.

Then, in your code, you have to call **$(...).quizify(options)** where options are:

* **help**: (true|false) If you need or not the online help.

Your code should looks like:

    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="js/jquery-quiz-plugin.js"></script>
    <script>
    $(document).ready(function() {
        $('#form1').quizify({help: true});
        $('#form2').quizify({help: false});
    });
    </script>

