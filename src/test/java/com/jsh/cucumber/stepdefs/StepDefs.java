package com.jsh.cucumber.stepdefs;

import com.jsh.JhipsterFlywayWebApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = JhipsterFlywayWebApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
