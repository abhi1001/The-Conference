const data = [
    {
    name: '1',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '4',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '7',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '10',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '13',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '16',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '2',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '5',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '8',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '11',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '14',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '17',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '3',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '6',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '9',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '12',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '15',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    },
    {
    name: '18',
    video: 'https://delivery.twentythree.com/599344/55191476/video_medium?revision=3&domain=videos.theconference.se&Expires=1660165200&Signature=znksYdwQO3izgg87r%7eKMn6c82D5XY9g4f%2dKm94RtP0v5WAslznjQy53u%2dq5GIvtGPidFVibE%2d9rP7URUD3BDnudFlopphKw6DQPJbgCMt75XUneG1RBqugikhZOomSJPrgPwrZlkCuZuIGMzC2cyvHQNNU%2dG0322fxfBQT3DeSUOoXy9M%7e2%7emvDqQzgF7VkqV46amn4h56ZlLvk3xutzMB%7exlyu6oTBLgaZC6tqQQlKKeBRAXci1m7iJcbIJYGWjQy8r%2dtEDTHzu1L4qHv4YBs4ovdQv8ChzLUzAItYsDmI9bw1ujAGl%2da7T2CR3Rh70P1YXDGdkpwgFJM2BaSqkOw%5f%5f&Key-Pair-Id=K2RKIY3YYBD5LB',
    stack: [ 'framework', 'frontend', 'web', 'mobile' ]
    }
    ];
    export default data;