<?php
$separatorDisplayed = false; 

foreach ($arResult['ITEMS'] as $key => $arItem) {
    ?>
    <div class="image">
        <a href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
            <?php
            if ($arItem["DETAIL_PICTURE"]["SRC"] != "") {
                $picture = CFile::ResizeImageGet($arItem["DETAIL_PICTURE"], array('width' => 325, 'height' => 200), BX_RESIZE_IMAGE_EXACT, true, array(array("name" => "sharpen", "precision" => 15))); ?>
                <img alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" src="<?= $picture["src"] ?>">
                <?php
            } else {
                ?>
                <img alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" src="<?= $arFilters["SRC"]; ?>">
                <?php
            }
            ?>
        </a>
    </div>
    <?php
    if ($key == 6 && !$separatorDisplayed) {
        ?>
        <img src="separator.png" alt="separator">
        <?php
        $separatorDisplayed = true;
    }
}
?>