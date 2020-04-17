package Controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

import io.swagger.annotations.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class HomeController {

	@RequestMapping("/his.do")
	public void test() {
		System.out.println("hi");
	}


	@GetMapping("/hisd.do")
	public Map<String, Object> test2() {
		System.out.println("hi");
		Map<String,Object> a = new HashMap<String, Object>();
		a.put("a", "b");
		return a;
	}


	@PostMapping("/login")
	@ApiParam(
			name = "param",
			type = "object",
			value = "회원가입용이긴한데",
			required = true,
			examples = @Example(
					value = {
							@ExampleProperty(
									mediaType="application/json",
									value = "{\"userId\":\"1234\",\"userName\":\"JoshJ\"}"

							)
					}))
	public Map<String, Object> test3(
			@RequestBody(required = true) Map<String, Object> param
	) {
		System.out.println("hi"+param+param.get("id"));
		Map<String,Object> a = new HashMap<String, Object>();
		a.put("a", "b");

		return a;
	}





}
