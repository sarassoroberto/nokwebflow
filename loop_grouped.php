<?php include_once('./radice/frontend/engine.php'); ?> 

<!-- Numero elementi ciclo Categorie -->
<!-- <?php echo count(get_cycle('sec_3','§#','')) ?> -->

<!-- Apertura ciclo Categorie -->
<body>
    <h1>Entità raggruppate per categorie</h1>
<?php if(get_cycle('sec_3','§#','') ){ ?>
    <?php foreach(get_cycle('sec_3','§#','') as $sec_3){ ?>

        <!-- nome Categorie -->
        <section>
            <h1>
                <?php echo get_value($sec_3, 'att_6', '', ''); ?> 
                <!-- <b><?= $sec_3 ?></b> -->
            </h1>
            <?php $query = "AND#att_5#LIKE#".$sec_3."§"; ?>
             <!-- Apertura ciclo Entità -->
            <?php if(get_cycle('sec_2','§#',$query) ){ ?>

                <ul>
                <?php foreach(get_cycle('sec_2','§#',$query) as $sec_2){ ?>

                    
                     <!-- nome Vini -->
                    <li>
                        <?php echo get_value($sec_2, 'att_4', '', ''); ?>
                    
                    </li>

                   


                <?php } end_cycle('sec_2'); ?>
                <!-- Chiusura ciclo Entità -->
                </ul>
            <?php }else{ ?>
                <!-- Contenuto personalizzato alternativo -->
            <?php } ?>
        </section>

    <?php } end_cycle('sec_3'); ?>
    <!-- Chiusura ciclo Categorie -->
</body>

<?php }else{ ?>
    <!-- Contenuto personalizzato alternativo -->
<?php } ?>