<!-- Numero elementi ciclo Vini -->
<?php echo count(get_cycle('sec_28','§#','AND#att_88#LIKE#obj_122§')) ?>

<!-- Apertura ciclo Vini -->
<?php if(get_cycle('sec_28','§#','AND#att_88#LIKE#obj_122§') ){ ?>
    <?php foreach(get_cycle('sec_28','§#','AND#att_88#LIKE#obj_122§') as $sec_28){ ?>

        <!-- Link Vini -->
        <a href="[FILE.PHP]?id=<?php echo get_link($sec_28, '0', ''); ?>">Testo del link</a>

        <!-- immagine principale Vini -->
        <img src="<?php echo get_value($sec_28, 'att_86', '', ''); ?>">

        <!-- immagine principale thumbnail Vini -->
        <img src="<?php echo get_value($sec_28, 'att_86', 'thumb', ''); ?>">

        <!-- nome Vini -->
        <?php echo get_value($sec_28, 'att_83', '', ''); ?>

        <!-- descrizione breve Vini -->
        <?php echo nl2br(get_value($sec_28, 'att_84', '', '')); ?>

        <!-- descrizione lunga Vini -->
        <?php echo get_value($sec_28, 'att_85', '', ''); ?>

        <!-- immagine di sfondo Vini -->
        <img src="<?php echo get_value($sec_28, 'att_87', '', ''); ?>">

        <!-- Link Tipologia -->
        <a href="[FILE.PHP]?id=<?php echo get_link($sec_28, '0', 'sec_29'); ?>">Testo del link</a>

        <!-- nome sezione Tipologia -->
        <?php echo get_value($sec_28, 'att_88', '', 'att_89'); ?>

    <?php } end_cycle('sec_28'); ?>
    <!-- Chiusura ciclo Vini -->

<?php }else{ ?>
    <!-- Contenuto personalizzato alternativo -->
<?php } ?>