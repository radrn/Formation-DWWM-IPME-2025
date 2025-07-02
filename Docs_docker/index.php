<?php
/**
 * summary of calculateCartTotal
 * @param array $prices
 * @return int
 * 
 * Calculate the totak price of a shopping cart 
 * The cheapest article will be free
 */
function calculateCartTotal(array $prices)
{
    $total = 0.0;
    $minPrice = null;

    foreach ($prices as $price) {
        if ($minPrice === null || $price < $minPrice) {
            $minPrice = $price;
        }
        $total += $price;
    }

    if ($minPrice !== null) {
        $total -= $minPrice;
    }

    return $total;
}
