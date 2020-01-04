<!-- Numero elementi ciclo Entità -->
<?php include_once('./radice/frontend/engine.php'); ?> 



<!-- Apertura ciclo Entità -->
<?php if(get_cycle('sec_2','§#','AND#att_5#LIKE#obj_2§') ){ ?>
    <?php foreach(get_cycle('sec_2','§#','AND#att_5#LIKE#obj_2§') as $sec_2){ ?>

        <!-- Link Entità -->
        <!-- <a href="[FILE.PHP]?id=<?php echo get_link($sec_2, '0', ''); ?>">Testo del link</a> -->

        <!-- attributo Entità -->
        <?php echo get_value($sec_2, 'att_4', '', ''); ?>

        <!-- Link tassonomia -->
        <!-- <a href="[FILE.PHP]?id=<?php echo get_link($sec_2, '0', 'sec_3'); ?>">Testo del link</a> -->

        <!-- nome tassonomia -->
        <!-- <?php echo get_value($sec_2, 'att_5', '', 'att_6'); ?> -->

    <?php } end_cycle('sec_2'); ?>
    <!-- Chiusura ciclo Entità -->

<?php }else{ ?>
    <!-- Contenuto personalizzato alternativo -->
<?php } ?>

