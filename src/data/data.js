const data = [
    {
    name: '1',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2010 ]
    },
    {
    name: '4',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2011 ]
    },
    {
    name: '7',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2012 ]
    },
    {
    name: '10',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2013 ]
    },
    {
    name: '13',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2014 ]
    },
    {
    name: '16',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2015 ]
    },
    {
    name: '2',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2016 ]
    },
    {
    name: '5',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2017 ]
    },
    {
    name: '8',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2018 ]
    },
    {
    name: '11',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2019 ]
    },
    {
    name: '14',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2020 ]
    },
    {
    name: '17',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2021 ]
    },
    {
    name: '3',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2010 ]
    },
    {
    name: '6',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2011 ]
    },
    {
    name: '9',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2012 ]
    },
    {
    name: '12',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2013 ]
    },
    {
    name: '15',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2014 ]
    },
    {
    name: '18',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 2015 ]
    }
    ];
    export default data;