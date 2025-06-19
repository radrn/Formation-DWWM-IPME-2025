<?php

$notes = [ 
    'math' => 8,
    'français' => 15,
    'histoire' => 7,
];

$max = $notes['math'];
foreach ($notes as $index => $note) {
      if ($note > $max) {
        $max = $note;
    };
};

echo "La meilleure note est en " . $index . " : " . $max;