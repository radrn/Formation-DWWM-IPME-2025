<?php

phpinfo();

?>

<!-- <?php

//$tab = [50, 10, 12, 58, 20];

$tab = [
    0 => 50,
    1 => 10,
    2 => 12,
    3 => 58,
    4 => 20
];

$tableauUser = [
    'prenom' => 'Jules',
    'nom' => 'Pauly',
    'age' => 34
];


//tableau associatif
$tabTest = [
    'users' => [
        [
            'prenom' => 'Jules',
            'age' => 34
        ],
        [
            'prenom' => 'Julien',
            'age' => 35,
            'hobbies' => [
                'bad',
                'foot'
            ]
        ]
    ]
];
//echo $tabtest['users'][0]['prenom']
//echo $tabTest['users'][1]['hobbies'][1]


for ($i = 0; $i < count($tab); $i++) {
    var_dump($tab[$i]);
}

foreach ($tab as $key => $item) {
    var_dump($item);
}
//on dump la clef
//on dump la value -->