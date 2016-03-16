<?php
$active = "resources";
$title = "Resources";
include 'include/header.php';
?>

<script>
var resources = [];
var list_resources = function(info){
    document.write("<img src='resources/loading.png' alt='loading' class='loading' />");
    resources.push(info);
}
</script>

        <div class="main">

            <div class='mini-menu'>
                <h2>Resources</h2>
                <a href='#tutorial'>Tutorial Resources</a>
                <a href='#stuff-and-things'>Stuff and Things</a>
            </div>

            <div class='body'>

                <section id='tutorial'>
                    <h3>Tutorial Resources</h3>
                    <script>
                    list_resources({
                        id: "tutorial",
                        folder: "CompSoc Design Assets",
                        image: "/resources/workshop.png"
                    });
                    </script>
                </section>
            </div>
        </div>


<?php
$scripts = array('scripts/min/resources-min.js');
include 'include/footer.php';
?>
