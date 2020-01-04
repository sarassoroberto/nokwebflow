<?php include_once('./radice/frontend/engine.php'); ?> 

<!-- Apertura ciclo Categorie -->
<?php foreach(get_cycle('sec_3','§#','') as $sec_3){ ?>

<!-- nome 2 Categorie -->
<?php echo get_value($sec_3, 'att_6', '', ''); ?>

<?php } end_cycle('sec_3'); ?>
<!-- Chiusura ciclo Categorie -->
