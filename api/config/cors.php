<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie', 'login', 'esqueci-minha-senha', 'resetar-senha'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],  
    'allowed_headers' => ['*'],
    'exposed_headers' => ['*'],
    'max_age' => 0,
    'supports_credentials' => true,
];

