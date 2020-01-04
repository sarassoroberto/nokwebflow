<?php include_once('radice/frontend/engine.php'); ?>
<!-- Numero elementi ciclo Tipologia Vino -->
<?php echo count(get_cycle('sec_29','§#','')) ?>

<!-- Apertura ciclo Tipologia Vino -->
<?php if(get_cycle('sec_29','§#','') ){ ?>
    <?php foreach(get_cycle('sec_29','§#','') as $sec_29){ ?>

        <!-- Link Tipologia Vino -->
        <a href="[FILE.PHP]?id=<?php echo get_link($sec_29, '0', ''); ?>">Testo del link</a>

        <!-- Numero elementi Vini Tipologia Vino -->
        <?php echo get_count($sec_29, 'sec_28', ''); ?>

        <!-- nome sezione Tipologia Vino -->
        <?php echo get_value($sec_29, 'att_89', '', ''); ?>

    <?php } end_cycle('sec_29'); ?>
    <!-- Chiusura ciclo Tipologia Vino -->

<?php }else{ ?>
    <!-- Contenuto personalizzato alternativo -->
<?php } ?>